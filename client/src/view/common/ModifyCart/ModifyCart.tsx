import React, {Component} from 'react';
import {CartItem} from "../../../model/CartItem";

interface ModifyCartProps {
    data: any
}

interface ModifyCartState {
    itemCount: number
}

class ModifyCart extends Component<ModifyCartProps, ModifyCartState> {

    public static itemsList: CartItem[] = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }

    componentDidMount() {
        const {itemCount} = this.state;

        if (this.props.data.isAdded) {
            if (!ModifyCart.itemsList
                .find(item =>
                    item.product.id ===
                    this.props.data.product.id)) {
                ModifyCart.itemsList.push(
                    {
                        product: this.props.data.product,
                        itemCount: itemCount
                    }
                )
            }
        }
        console.log(ModifyCart.itemsList);
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {
        let {itemCount} = this.state;
        let item = ModifyCart
            .itemsList
            .find(item =>
                item.product.id ===
                this.props.data.product.id);
        // @ts-ignore
        let index = ModifyCart.itemsList.indexOf(item);
        ModifyCart.itemsList.splice(index, 1);
        ModifyCart.itemsList.push(
            {
                product: this.props.data.product,
                itemCount: itemCount
            }
        );

        console.log(ModifyCart.itemsList)
    }

    render() {

        let {itemCount} = this.state;

        const onDecreaseItemCount = () => {
            if (itemCount > 1) {
                this.setState({itemCount: --itemCount})
            } else {
                alert("Item count can't be less than 1");
            }
        }
        const onIncreaseItemCount = () => {
            (this.state.itemCount < this.props.data.product.itemQTY)
                ? this.setState({itemCount: ++itemCount})
                : alert("There is currently no stock available!");

        }

        return (
            <div
                className="flex me-[-4px] justify-center items-center border-septenary rounded-xl border-[.5px] gap-1 px-3 py-1.5">
                <button
                    className="text-quinary text-smaller hover:bg-black hover:rounded-full transition-all hover:bg-opacity-10 px-2 py-0.5"
                    onClick={onDecreaseItemCount}
                >-
                </button>
                <h6 className="text-quinary text-smaller min-w-6 text-center">{itemCount}</h6>
                <button
                    className="text-quinary text-smaller hover:bg-black hover:rounded-full transition-all hover:bg-opacity-10 px-2 py-0.5"
                    onClick={onIncreaseItemCount}
                >+
                </button>
            </div>
        );
    }
}

export default ModifyCart;
