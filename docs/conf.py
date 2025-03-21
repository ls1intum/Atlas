# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = 'Atlas'
copyright = '2025, Technical University of Munich, Applied Education Technologies'
author = 'Technical University of Munich, Applied Education Technologies'


# -- General configuration ---------------------------------------------------

# The document name of the “main” document, that is, the document
# that contains the root toctree directive.
master_doc = "index"

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    "sphinx_rtd_theme",
    "sphinxcontrib.bibtex",
    "myst_parser"
]

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'venv', 'README.md', 'requirements.txt']

source_suffix = {
    '.rst': 'restructuredtext',
    '.txt': 'markdown',
    '.md': 'markdown',
}

linkcheck_ignore = [
    r'http(s)?://.*localhost(:\d+)?/?',
]
# do not check anchors on websites that need JavaScript to load the content
# the anchor points to
linkcheck_anchors_ignore_for_url = [
    r"https://angular.io/guide/.*",
    r"https://github.com/.*",
    r"https://k3d.io/.*"
]

# -- Publications ------------------------------------------------------------
bibtex_bibfiles = ['research/publications.bib']
bibtex_default_style = 'unsrtalpha'
bibtex_reference_style = 'label'

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'sphinx_rtd_theme'
html_context = {
    "display_github": True,
    "github_user": "ls1intum",
    "github_repo": "Atlas",
    "github_version": "develop",
    "conf_py_path": "/docs/",
}
html_style = 'css/style.css'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']
