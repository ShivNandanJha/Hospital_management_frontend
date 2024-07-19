import { useState } from "react";
import Tab1 from "./nonSurgical";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-neutral-700">
        <nav className="-mb-0.5 flex justify-center space-x-6" aria-label="Tabs" role="tablist">
          <button
            type="button"
            className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 ${activeTab === 1 ? 'font-semibold border-blue-600 text-blue-600' : ''}`}
            onClick={() => setActiveTab(1)}
            id="horizontal-alignment-item-1"
            aria-controls="horizontal-alignment-1"
            role="tab"
          >
            Tab 1
          </button>
          <button
            type="button"
            className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 ${activeTab === 2 ? 'font-semibold border-blue-600 text-blue-600' : ''}`}
            onClick={() => setActiveTab(2)}
            id="horizontal-alignment-item-2"
            aria-controls="horizontal-alignment-2"
            role="tab"
          >
            Tab 2
          </button>
          <button
            type="button"
            className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 ${activeTab === 3 ? 'font-semibold border-blue-600 text-blue-600' : ''}`}
            onClick={() => setActiveTab(3)}
            id="horizontal-alignment-item-3"
            aria-controls="horizontal-alignment-3"
            role="tab"
          >
            Tab 3
          </button>
        </nav>
      </div>

      <div className = "mt-3">
      <div id        = "horizontal-alignment-1" role = "tabpanel" aria-labelledby = "horizontal-alignment-item-1" className = {activeTab === 1 ? '' : 'hidden'}>
          <Tab1/>
        </div>
        <div id="horizontal-alignment-2" role="tabpanel" aria-labelledby="horizontal-alignment-item-2" className={activeTab === 2 ? '' : 'hidden'}>
          <p className="text-gray-500 dark:text-neutral-400">
            This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">second</em> item's tab body.
          </p>
        </div>
        <div id="horizontal-alignment-3" role="tabpanel" aria-labelledby="horizontal-alignment-item-3" className={activeTab === 3 ? '' : 'hidden'}>
          <p className="text-gray-500 dark:text-neutral-400">
            This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">third</em> item's tab body.
          </p>
        </div>
      </div>
    </div>
  );
}
