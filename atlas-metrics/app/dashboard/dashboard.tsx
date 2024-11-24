import { EndpointActivity } from "@/components/custom/endpoint-activity";
import applicationContainer from "@/app/server/applicationContainer";
import {PieChartDonut} from "@/components/custom/pie-chart-donut";
import {Menu} from "@/components/custom/menu";
import {Header} from "@/components/custom/header";
import {Footer} from "@/components/custom/footer";

// TODO: Replace this with actual data
const endpointActivityChartDataMocked = [
    { date: "2024-04-01", "api/call": 222, "api/test": 150 },
    { date: "2024-04-02", "api/call": 97, "api/test": 180 },
    { date: "2024-04-03", "api/call": 167, "api/test": 120 },
    { date: "2024-04-04", "api/call": 242, "api/test": 260 },
    { date: "2024-04-05", "api/call": 373, "api/test": 290 },
    { date: "2024-04-06", "api/call": 301, "api/test": 340 },
    { date: "2024-04-07", "api/call": 245, "api/test": 180 },
    { date: "2024-04-08", "api/call": 409, "api/test": 320 },
    { date: "2024-04-09", "api/call": 59, "api/test": 110 },
    { date: "2024-04-10", "api/call": 261, "api/test": 190 },
    { date: "2024-04-11", "api/call": 327, "api/test": 350 },
    { date: "2024-04-12", "api/call": 292, "api/test": 210 },
    { date: "2024-04-13", "api/call": 342, "api/test": 380 },
    { date: "2024-04-14", "api/call": 137, "api/test": 220 },
    { date: "2024-04-15", "api/call": 120, "api/test": 170 },
    { date: "2024-04-16", "api/call": 138, "api/test": 190 },
    { date: "2024-04-17", "api/call": 446, "api/test": 360 },
    { date: "2024-04-18", "api/call": 364, "api/test": 410 },
    { date: "2024-04-19", "api/call": 243, "api/test": 180 },
    { date: "2024-04-20", "api/call": 89, "api/test": 150 },
    { date: "2024-04-21", "api/call": 137, "api/test": 200 },
    { date: "2024-04-22", "api/call": 224, "api/test": 170 },
    { date: "2024-04-23", "api/call": 138, "api/test": 230 },
    { date: "2024-04-24", "api/call": 387, "api/test": 290 },
    { date: "2024-04-25", "api/call": 215, "api/test": 250 },
    { date: "2024-04-26", "api/call": 75, "api/test": 130 },
    { date: "2024-04-27", "api/call": 383, "api/test": 420 },
    { date: "2024-04-28", "api/call": 122, "api/test": 180 },
    { date: "2024-04-29", "api/call": 315, "api/test": 240 },
    { date: "2024-04-30", "api/call": 454, "api/test": 380 },
    { date: "2024-05-01", "api/call": 165, "api/test": 220 },
    { date: "2024-05-02", "api/call": 293, "api/test": 310 },
    { date: "2024-05-03", "api/call": 247, "api/test": 190 },
    { date: "2024-05-04", "api/call": 385, "api/test": 420 },
    { date: "2024-05-05", "api/call": 481, "api/test": 390 },
    { date: "2024-05-06", "api/call": 498, "api/test": 520 },
    { date: "2024-05-07", "api/call": 388, "api/test": 300 },
    { date: "2024-05-08", "api/call": 149, "api/test": 210 },
    { date: "2024-05-09", "api/call": 227, "api/test": 180 },
    { date: "2024-05-10", "api/call": 293, "api/test": 330 },
    { date: "2024-05-11", "api/call": 335, "api/test": 270 },
    { date: "2024-05-12", "api/call": 197, "api/test": 240 },
    { date: "2024-05-13", "api/call": 197, "api/test": 160 },
    { date: "2024-05-14", "api/call": 448, "api/test": 490 },
    { date: "2024-05-15", "api/call": 473, "api/test": 380 },
    { date: "2024-05-16", "api/call": 338, "api/test": 400 },
    { date: "2024-05-17", "api/call": 499, "api/test": 420 },
    { date: "2024-05-18", "api/call": 315, "api/test": 350 },
    { date: "2024-05-19", "api/call": 235, "api/test": 180 },
    { date: "2024-05-20", "api/call": 177, "api/test": 230 },
    { date: "2024-05-21", "api/call": 82, "api/test": 140 },
    { date: "2024-05-22", "api/call": 81, "api/test": 120 },
    { date: "2024-05-23", "api/call": 252, "api/test": 290 },
    { date: "2024-05-24", "api/call": 294, "api/test": 220 },
    { date: "2024-05-25", "api/call": 201, "api/test": 250 },
    { date: "2024-05-26", "api/call": 213, "api/test": 170 },
    { date: "2024-05-27", "api/call": 420, "api/test": 460 },
    { date: "2024-05-28", "api/call": 233, "api/test": 190 },
    { date: "2024-05-29", "api/call": 78, "api/test": 130 },
    { date: "2024-05-30", "api/call": 340, "api/test": 280 },
    { date: "2024-05-31", "api/call": 178, "api/test": 230 },
    { date: "2024-06-01", "api/call": 178, "api/test": 200 },
    { date: "2024-06-02", "api/call": 470, "api/test": 410 },
    { date: "2024-06-03", "api/call": 103, "api/test": 160 },
    { date: "2024-06-04", "api/call": 439, "api/test": 380 },
    { date: "2024-06-05", "api/call": 88, "api/test": 140 },
    { date: "2024-06-06", "api/call": 294, "api/test": 250 },
    { date: "2024-06-07", "api/call": 323, "api/test": 370 },
    { date: "2024-06-08", "api/call": 385, "api/test": 320 },
    { date: "2024-06-09", "api/call": 438, "api/test": 480 },
    { date: "2024-06-10", "api/call": 155, "api/test": 200 },
    { date: "2024-06-11", "api/call": 92, "api/test": 150 },
    { date: "2024-06-12", "api/call": 492, "api/test": 420 },
    { date: "2024-06-13", "api/call": 81, "api/test": 130 },
    { date: "2024-06-14", "api/call": 426, "api/test": 380 },
    { date: "2024-06-15", "api/call": 307, "api/test": 350 },
    { date: "2024-06-16", "api/call": 371, "api/test": 310 },
    { date: "2024-06-17", "api/call": 475, "api/test": 520 },
    { date: "2024-06-18", "api/call": 107, "api/test": 170 },
    { date: "2024-06-19", "api/call": 341, "api/test": 290 },
    { date: "2024-06-20", "api/call": 408, "api/test": 450 },
    { date: "2024-06-21", "api/call": 169, "api/test": 210 },
    { date: "2024-06-22", "api/call": 317, "api/test": 270 },
    { date: "2024-06-23", "api/call": 480, "api/test": 530 },
    { date: "2024-06-24", "api/call": 132, "api/test": 180 },
    { date: "2024-06-25", "api/call": 141, "api/test": 190 },
    { date: "2024-06-26", "api/call": 434, "api/test": 380 },
    { date: "2024-06-27", "api/call": 448, "api/test": 490 },
    { date: "2024-06-28", "api/call": 149, "api/test": 200 },
    { date: "2024-06-29", "api/call": 103, "api/test": 160 },
    { date: "2024-06-30", "api/call": 446, "api/test": 400 },
];

const pieChartDataMock = [
    { label: "GET", value: 275 },
    { label: "POST", value: 275 },
]

export default function Dashboard() {

    //const metricsService = applicationContainer.getMetricsService();
    //const endpointActivityChartData = await metricsService.getEndpointActivityByDayForChart("atlas");

    return (
        <div className="m-5 text-center min-h-screen">
            <Header/>
            <Menu />
            <div className="pb-5">
                <EndpointActivity
                    title="Endpoint Activity"
                    description="Recent activity for all endpoints of Atlas"
                    chartData={endpointActivityChartDataMocked}
                />
            </div>
            <div className="grid grid-cols-2 gap-5 pb-10">
                <PieChartDonut title="Activity by Type" description="Activity grouped by the type of endpoints" label="Calls" chartData={pieChartDataMock}/>
                <PieChartDonut title="Activity by Category" description="Activity grouped by data retrieval or injection" label="Calls" chartData={pieChartDataMock}/>
            </div>
            <Footer/>
        </div>
    );
}