import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { loadAllOrder, selectOrder } from "../../features/orderSlice";
import OrderCard from "../../components/OrderCard";
import moment from "moment";
import EmptyPage from "../../components/EmptyPage";

function OrderData() {

  const dispatch = useDispatch();
  const orderItems = useAppSelector(selectOrder)

  useEffect(() => {
    const items = localStorage.getItem("order item");
    const res = JSON.parse(items as string);
    dispatch(loadAllOrder(res));
  }, [dispatch]);

  if (orderItems.length <= 0) {
    return (
      <EmptyPage />
    )
  }

  return (
    <div className="grid grid-cols-2 gap-x-4">
        {orderItems.map((order, index) => (
          <OrderCard
            key={index}
            name={index + 1}
            totalPrice={order.cost}
            payment={order.payment}
            date={moment(order.date).format('MM/DD/YYYY h:mm:ss a')}
            cartItems={order.items}
          />
        ))}
      </div>
  )
}

export default OrderData;