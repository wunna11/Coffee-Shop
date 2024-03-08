import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { useLocation, Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { loadAllCart, selectCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Proucts", href: "/products", current: false },
  { name: "Orders", href: "/orders", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const dispatch = useDispatch();
  const cartItems = useAppSelector(selectCart);

  //const { username } = useContext(NavbarContext);

  useEffect(() => {
    const items = localStorage.getItem("cart item");
    const res = JSON.parse(items as string);
    dispatch(loadAllCart(res));
  }, [dispatch]);

  //const logoutHandler = () => {
  //  dispatch(logout());
  //};

  return (
    <>
      <Disclosure
        as="nav"
        className="bg-background border-2 border-b-primary-600"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      src="/images/app-logo.png"
                      alt="gymLogo"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => {
                        const isActive =
                          currentPath === item.href ? true : false;
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              isActive
                                ? "bg-primary-700 text-white"
                                : "text-primary",
                              "rounded-md px-3 py-3 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="flex space-x-8">
                    <button
                      type="button"
                      onClick={() => setShowModal(true)}
                      className="relative rounded-full p-1 text-gray-400 hover:text-white"
                    >
                      <span className="absolute inset-1.5" />
                      <ShoppingCartIcon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
                      {cartItems.length > 0 ? (
                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-1 -end-1">
                          {cartItems.length}
                        </div>
                      ) : null}
                    </button>

                    {/*<div className="flex md:order-2">
                    <Dropdown
                      arrowIcon={false}
                      inline
                      label={
                        <Avatar
                          alt="User settings"
                          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          rounded
                        />
                      }
                    >
                      <Dropdown.Header>
                          <span className="block text-sm">{username}</span>
                      </Dropdown.Header>
                      <Dropdown.Item>Dashboard</Dropdown.Item>
                      <Dropdown.Item>Settings</Dropdown.Item>
                      <Dropdown.Item>Profile</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={logoutHandler}>Sign out</Dropdown.Item>
                    </Dropdown>
                  </div>*/}
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-accent text-white"
                        : "text-primary hover:bg-accent hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {showModal && (
        <ShoppingCart closeModal={() => setShowModal(false)} showModal={true} />
      )}

      <Outlet />
    </>
  );
}
