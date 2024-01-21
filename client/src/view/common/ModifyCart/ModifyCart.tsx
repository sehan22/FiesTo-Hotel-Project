import React, {Component} from 'react';

class ModifyCart extends Component {
    render() {
        return (
            <div
                className="flex me-[-4px] justify-center items-center border-septenary rounded-s-xl border-[.5px] gap-1 px-3 py-1.5">
                <button
                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">-
                </button>
                <h6 className="text-quinary text-smaller min-w-6 text-center">5</h6>
                <button
                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">+
                </button>
            </div>
        );
    }
}

export default ModifyCart;
