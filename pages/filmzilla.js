const Filmzilla = () => (
    <div className="main-page container">
        <div className="main-page__header b-header">
            <div className="b-header__search">
                <span className="b-header__search-title">find your movie</span>
                <input
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={(e) => handleEnterPress(e)}
                    className="b-header__search-input"
                    type="search"
                    placeholder="search"
                    value="hi"
                />
            </div>
        </div>
    </div>
);
export default Filmzilla;