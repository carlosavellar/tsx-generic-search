import { useState } from "react";
import "./App.css";
import { people } from "./mocks/IPeople";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { genericSearch } from "./utils/genericSearch";
import { InputSearch } from "./components/InputSearch";
import { IPerson } from "./interfaces/IPerson";
import { SortProperty } from "./components/SortProperty";
import { IProperty } from "./interfaces/IProperty";
import { genericSort } from "./utils/genericSort";

function App() {
  const [query, setQuery] = useState<string>("");
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    IProperty<IPerson>
  >({
    property: "firstName",
    isDescending: true,
  });

  return (
    <div className="">
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Deploy faster
                </p>

                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Fucking people
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p></p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  People
                </h1>
                <InputSearch setProperty={setQuery} />
                <SortProperty
                  setProperty={(propertyType) => {
                    setWidgetSortProperty(propertyType);
                  }}
                  object={people[0]}
                />

                <ul className="mt-8 space-y-3 text-gray-600">
                  {people
                    .filter((person) =>
                      genericSearch(
                        person,
                        ["firstName", "lastName"],
                        query,
                        true
                      )
                    )
                    .sort((a, b) => genericSort(a, b, widgetSortProperty))
                    .map((person) => {
                      return (
                        <li className="flex gap-x-2">
                          <CloudArrowUpIcon
                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                            aria-hidden="true"
                          />
                          {person.firstName} {person.lastName}
                          <span>
                            <strong className="font-semibold text-gray-900"></strong>
                          </span>
                        </li>
                      );
                    })}

                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900"></strong>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
