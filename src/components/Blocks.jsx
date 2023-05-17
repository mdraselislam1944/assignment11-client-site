import React from "react";
import {
    FaCheck,
    FaHandPointRight,
    FaQuora,
    FaRocketchat,
} from "react-icons/fa";

const Blocks = () => {
    return (
        <div className="mx-20">
            <p>
                <small className="text-3xl flex items-center">
                    <FaQuora></FaQuora> 1. Tell us the differences between uncontrolled
                    and controlled components.
                </small>
                <p className="text-xl">
                    <small> 
                        <small className="text-2xl">Ans.</small> The DOM is very similar to HTML but is not exactly the same as the
                        HTML source document of the webpage. You can check it by yourself:
                        inspecting the page DOM and viewing the page source can be very
                        different. You might find elements on the DOM that you won’t find in
                        the source or vice-versa. This is because HTML elements can be
                        created, deleted and modified by Javascript. For example, clicking
                        on a button in a page can make an image not present in the HTML
                        source appear. However, you will find this image in the DOM.
                        Controlled components or inputs are components whose value is tied
                        to the React state of the components whereas uncontrolled components
                        are the ones whose value is controlled or stored in the DOM directly
                        and can only be accessed from the DOM.
                    </small>
                </p>
            </p>
        </div>
    );
};

export default Blocks;
