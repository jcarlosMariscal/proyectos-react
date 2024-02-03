import { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { ButtonComponent } from "./pure/ButtonComponent";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const NavBar = () => {
  const location = useLocation();
  const navigation = [
    { name: "Home", to: "/", current: location.pathname === "/" },
    {
      name: "Pokedex",
      to: "/pokedex",
      current: location.pathname === "/pokedex",
    },
  ];
  const { inputSearch, filterActive, types } = useContext(PokemonContext);
  const { onInputChange, valueSearch, onResetForm } = inputSearch;
  const { typeSelected } = types;
  const search = typeSelected.filter((el) => el.checked);
  const { active, setActive } = filterActive;
  const navigate = useNavigate();
  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/pokedex/search", {
      state: valueSearch,
    });
    onResetForm();
  };
  const showComponentFilter = () => {
    setActive(!active);
  };
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-[10vh]">
            {/* <div className="relative flex h-16 items-center justify-between custom-flex-end"> */}
            <div className="relative flex h-16 items-center !justify-around">
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start custom-flex-end">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:flex">
                {/* <p className="text-white">Welcome</p> */}

                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
                <div className="container mx-auto my-3 p-3 flex items-center gap-3">
                  <div className="flex items-center">
                    <ButtonComponent
                      text={
                        <AdjustmentsHorizontalIcon className="size-8 text-white" />
                      }
                      color={`${
                        search.length
                          ? "bg-gray-900 border border-white"
                          : "bg-gray-700 border border-gray-700"
                      } hover:bg-gray-600`}
                      size="size-8"
                      handleClick={showComponentFilter}
                    />
                    {/* ? "bg-gray-900 text-white" : "text-gray-300
                    hover:bg-gray-700 hover:text-white", */}
                  </div>
                  <div className="">
                    <form
                      onSubmit={onSearchSubmit}
                      className="flex gap-2 items-center"
                    >
                      <div className="relative">
                        <input
                          type="text"
                          name="valueSearch"
                          placeholder="Search pokemon"
                          className="py-1 px-2 bg-gray-700 text-white rounded-full outline-none"
                          value={valueSearch}
                          onChange={onInputChange}
                        />
                        <span className="absolute right-2 top-0 bottom-0 flex items-center justify-center">
                          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                        </span>
                      </div>
                      <ButtonComponent
                        text="Search"
                        color="bg-gray-700 text-white hover:bg-gray-600"
                        size="w-20 h-8"
                      />
                    </form>
                  </div>
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
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
  );
};
