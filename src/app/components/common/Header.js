import React from 'react';

/**
 * Header stateless component
 */
const Header = () => {
    return (
        <header className="bp-header cf">
            <span>Blueprint
                <span className="bp-icon bp-icon-about"
                      data-content="The Blueprints are a collection of basic and minimal website concepts, components, plugins and layouts with minimal style for easy adaption and usage, or simply for inspiration.">
                </span>
            </span>
            <h1>Product Comparison Layout &amp; Effect</h1>
            <nav>
                <a href="http://tympanus.net/Blueprints/GridGallery/" className="bp-icon bp-icon-prev"
                   data-info="previous Blueprint"><span>Previous Blueprint</span></a>
                <a href="http://tympanus.net/codrops/?p=24096" className="bp-icon bp-icon-drop"
                   data-info="back to the Codrops article"><span>back to the Codrops article</span></a>
                <a href="http://tympanus.net/codrops/category/blueprints/" className="bp-icon bp-icon-archive"
                   data-info="Blueprints archive"><span>Go to the archive</span></a>
            </nav>
        </header>
    );
};

export default Header;