import React from "react";

function Header() {
    return (
        <header className="bg-white text-black p-6 flex items-center">
            <img src="/logos/hexagon.svg" alt="Hexagon Logo" className="w-12 h-12 mr-4"/>
            <div>
                <h1 className="text-4xl font-bold">JuSo | Portfolio</h1>
                <p>By Juan Sobalvarro</p>
            </div>
        </header>
    );
}

export default Header;