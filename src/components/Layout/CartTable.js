import { useOutletContext } from "react-router-dom";
import deleteIcon from "../../images/delete.png";

export const CartTable = () => {
  const [shoppingcart, setshoppingcart] = useOutletContext();
  const commands = shoppingcart.map((command) => {
    return (
      <tr key={`command${shoppingcart.indexOf(command)}`}>
        <td>x {command.quantity}</td>
        <td>
          <div>{command.food.name}</div>
          <ul>
            {command.category.custom_options.map((option) => {
              return (
                <li
                  key={`option${command.category.custom_options.indexOf(
                    option
                  )}`}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        </td>
        <td>
          <div>
            <span>
              {command.quantity * command.food.price}
              <img
                // onClick={deleteItemFromCart}
                data-index={`${shoppingcart.indexOf(command)}`}
                className="deleteIcon"
                src={deleteIcon}
                alt="delete"
              />
            </span>
          </div>
          {command.category.custom_options.options.map((option) => {
            return <div>{option.price}</div>;
          })}
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr className="tableHeader">
          <th>Qté</th>
          <th>Article</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        {shoppingcart.length > 0 ? (
          { commands }
        ) : (
          <div>Votre panier est vide</div>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>Sous total</td>
          <td>
            {shoppingcart.reduce((total, element) => {
              return (
                total +
                element.quantity * element.price +
                element.options.reduce((totalOptions, options) => {
                  return totalOptions + options.price;
                }, 0)
              );
            }, 0)}
          </td>
        </tr>
        <tr>
          <td colSpan={2}>Frais de livraison</td>
          <td>$180</td>
        </tr>
        <tr className="totalRow">
          <td colSpan={2}>Total</td>
          <td>$180</td>
        </tr>
      </tfoot>
    </table>
  );
};
