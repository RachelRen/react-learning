import React from "react";
import ReactDOM from "react-dom";

import MouseTracker from "../page/componentComposite/renderprops";
import EnhanceMouseTracker, { MouseDogTracker } from "../page/componentComposite/renderprops/enhance";
import EnhanceChildMouseTracker from "../page/componentComposite/renderprops/enhanceChild";

import Mouse, { HOCCat } from "../page/componentComposite/hoc/index";
// import HookMouse from "../page/componentComposite/hooks/index";
import ExtendsCat from "../page/componentComposite/demos/implstate1";
import ExtendsCat2 from "../page/componentComposite/demos/implstate2";
// import MixinComponent from "../page/componentComposite/mixin/index";

ReactDOM.render(
    <div>
        <ExtendsCat />
        <h2>ExtendsCat2</h2>
        <ExtendsCat2 />
        {/* <ExtendsCat /> */}
        {/* <section>
            <h3>render prop</h3>
            <MouseTracker />
            <EnhanceMouseTracker />
            <MouseDogTracker />
            <EnhanceChildMouseTracker />
        </section>
        <hr />
        <section>
            <h3>Hoc</h3>
            <Mouse />
            <HOCCat />
        </section>
        <hr /> */}
        {/* <section>
            <h3>Hooks</h3>
            <HookMouse />
        </section> */}
        <hr />
        {/* <section>
            <h3>MixinComponent</h3>
            <MixinComponent />
        </section> */}
    </div>,
    document.getElementById("component")
);
