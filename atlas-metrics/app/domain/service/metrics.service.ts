import {IMetricsRepository} from "@/app/domain/repository/metrics.repository";
import {EndpointActivityBucketDAO} from "@/app/domain/dao/endpointActivityBucket";

export interface IMetricsService {
    getEndpointActivityByDay(service: string, version?: string, endpoint?: string): Promise<EndpointActivityBucketDAO[]>;
    getEndpointActivityByDayForChart(service: string, version?: string, endpoint?: string): Promise<ChartDataItemDAO[]>;
}

export class MetricsServiceImpl implements IMetricsService {
    private metricsRepository: IMetricsRepository;

    constructor(metricsRepository: IMetricsRepository) {
        this.metricsRepository = metricsRepository;
    }

    async getEndpointActivityByDay(service: string, version?: string, endpoint?: string): Promise<EndpointActivityBucketDAO[]> {
        const endpointActivity = await this.metricsRepository.getEndpointActivity(service, version, endpoint);
        const groupedData = new Map<string, { date: Date, count: number }>();

        endpointActivity.forEach(({ endpoint, date }) => {
            // Normalize date to the day level (remove time)
            const normalizedDate = new Date(date);
            normalizedDate.setHours(0, 0, 0, 0);

            // Create a unique key for grouping by endpoint and normalized date
            const key = `${endpoint}_${normalizedDate.toISOString()}`;

            if (!groupedData.has(key)) {
                groupedData.set(key, { date: normalizedDate, count: 0 });
            }

            // Increment the count for the group
            groupedData.get(key)!.count += 1;
        });

        // Convert the grouped Map back to an array of EndpointActivityBucketDAO
        return Array.from(groupedData.entries()).map(([key, { date, count }]) => {
            const endpoint = key.split('_')[0]; // Extract endpoint from the key
            return { endpoint, date, count };
        });
    }

    /**
     * Get endpoint activity by day for a service, version, and endpoint, and transform it to a format suitable for a chart.
     *
     * @param service the service for which to fetch endpoint activity for
     * @param version the version of the service (optional: limits the result to a specific version)
     * @param endpoint the endpoint of the service (optional: limits the result to a specific endpoint)
     */
    async getEndpointActivityByDayForChart(service: string, version?: string, endpoint?: string) : Promise<ChartDataItemDAO[]> {
        const endpointActivity = await this.getEndpointActivityByDay(service, version, endpoint);
        return this.transformToChartData(endpointActivity);
    }

    private transformToChartData(buckets: EndpointActivityBucketDAO[]): ChartDataItemDAO[] {
        // Create a Map to group data by date
        const groupedByDate = new Map<string, ChartDataItemDAO>();

        buckets.forEach(({ endpoint, date, count }) => {
            // Normalize date to string format (e.g., "YYYY-MM-DD")
            const dateString = date.toISOString().split("T")[0];

            if (!groupedByDate.has(dateString)) {
                groupedByDate.set(dateString, { date: dateString });
            }

            // Update the count for the endpoint on this date
            const dataForDate = groupedByDate.get(dateString)!;
            if (typeof dataForDate[endpoint] === "number") {
                dataForDate[endpoint] = dataForDate[endpoint] + count;
            } else {
                dataForDate[endpoint] = count;
            }
        });

        // Convert the grouped data to an array
        return Array.from(groupedByDate.values());
    }
}