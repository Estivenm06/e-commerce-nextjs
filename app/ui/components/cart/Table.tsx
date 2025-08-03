import React from "react";
import {
  Table,
  TableHeaderRow,
  TableHeaderCell,
  TableRow,
  TableCell,
  TableRowAction,
  Modals,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/sys-cancel.js";
import "@ui5/webcomponents-icons/dist/add.js";

import { useStoreContext } from "../../../context/context";

const TableCart = () => {
  const { cart, products, dispatch } = useStoreContext();

  if (!cart || !products) return null;
  const totalProducts = cart.products.reduce((acc, product) => {
    const productDetails = products.find((p) => p.id === product.productId);
    if (!productDetails) return acc;
    return acc + productDetails.price * product.quantity;
  }, 0);

  const content = cart.products.map((product) => {
    const onSubmitQuantity = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const quantityInput = e.currentTarget.querySelector(
        'input[name="quantity"]'
      ) as HTMLInputElement;
      const quantity = parseInt(quantityInput.value, 10);

      if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
      }
      dispatch({
        type: "SELECT_QUANTITY",
        payload: { id: product.productId, quantity },
      });
      return false;
    };
    const onDeleteProduct = (id: number) =>
      dispatch({ type: "REMOVE_PRODUCT", payload: { id } });

    const productDetails = products.find((p) => p.id === product.productId);
    if (!productDetails) return null;
    return (
      <TableRow
        actions={
          <>
            <TableRowAction
              icon="add"
              text="Quantity"
              onClick={() => {
                const { close } = Modals.showDialog({
                  headerText: `Select Quantity ${productDetails.title}`,
                  children: (
                    <div className="flex flex-col items-center max-w-[450px] mx-auto">
                      <form
                        className="flex flex-col justify-center items-center p-2 rounded-lg gap-5 "
                        onSubmit={onSubmitQuantity}
                      >
                        <label htmlFor="quantity" className="text-lg">
                          Quantity:
                        </label>
                        <input
                          name="quantity"
                          type="number"
                          id="quantity"
                          min="1"
                          defaultValue={product.quantity}
                          max={999}
                          className="border border-gray-300 rounded-md p-2"
                        />
                        <button
                          type="submit"
                          className="bg-green-500 hover:bg-green-700 rounded-md px-5 py-2 text-white font-semibold cursor-pointer transition-colors duration-200"
                        >
                          Update Quantity
                        </button>
                      </form>
                    </div>
                  ),
                  footer: (
                    <div className="w-full flex justify-end items-center py-7">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 rounded-md px-5 py-2 text-white font-semibold cursor-pointer transition-colors duration-200"
                        onClick={() => close()}
                      >
                        Close
                      </button>
                    </div>
                  ),
                });
              }}
            />
            <TableRowAction
              icon="sys-cancel"
              text="Remove"
              onClick={() => onDeleteProduct(product.productId)}
            />
          </>
        }
        key={product.productId}
        className="hover:bg-gray-100 transition-colors border-b-2 border-gray-300 py-2 "
      >
        <TableCell>
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="w-fit h-20 object-contain select-none ml-5"
          />
        </TableCell>
        <TableCell>
          {productDetails.title.length > 15
            ? productDetails.title.substring(0, 15) + "..."
            : productDetails.title}
        </TableCell>
        <TableCell>{productDetails.category}</TableCell>
        <TableCell>${productDetails.price.toFixed(2)}</TableCell>
        <TableCell>{product.quantity}</TableCell>
        <TableCell>
          ${(productDetails.price * product.quantity).toFixed(2)}
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Table
      className="mx-auto justify-center items-center table "
      rowActionCount={1}
      headerRow={
        <TableHeaderRow sticky className="border-b-2 border-gray-500 ">
          <TableHeaderCell minWidth="200px" width="200px" className="ml-5">
            <span>Product</span>
          </TableHeaderCell>
          <TableHeaderCell minWidth="200px" width="200px">
            <span>Product Name</span>
          </TableHeaderCell>
          <TableHeaderCell minWidth="200px" width="200px">
            <span>Category</span>
          </TableHeaderCell>
          <TableHeaderCell minWidth="100px" width="100px">
            <span>Price</span>
          </TableHeaderCell>
          <TableHeaderCell minWidth="100px" width="100px">
            <span>Quantity</span>
          </TableHeaderCell>
          <TableHeaderCell minWidth="100px" width="100px">
            <span>Total</span>
          </TableHeaderCell>
        </TableHeaderRow>
      }
    >
      {content}
      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell>
          <strong className="text-lg mx-auto w-full">
            ${totalProducts.toFixed(2)}
          </strong>
        </TableCell>
      </TableRow>
    </Table>
  );
};

export { TableCart };
