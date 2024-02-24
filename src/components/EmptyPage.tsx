import { useNavigate } from 'react-router-dom';
import Button from "./Button";

function EmptyPage() {

  const navigate = useNavigate();


  return (
    <div className="flex items-center justify-center">
      <div>
      <img src="/images/empty-folder.png" className="w-80 h-80"/>
        <h1 className="font-bold text-primary text-xl text-center">Your Order is empty!</h1>
        <div className="text-center mt-3">
        <Button
              title="Continue Shopping"
              onClick={() => navigate('/products')}
            />
        </div>
      </div>
    </div>
  );
}

export default EmptyPage;
