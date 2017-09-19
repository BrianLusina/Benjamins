import React from 'react';

/**
 * Header stateless component
 */
const Header = () => {
    return (
        <header className="bp-header cf">
            <span>Benjamins
                <span className="bp-icon bp-icon-about"
                      data-content="Benjamins is a collection of legacy, legends and taste.">
                </span>
            </span>
            <h1>Pace yourself, the night is young</h1>
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