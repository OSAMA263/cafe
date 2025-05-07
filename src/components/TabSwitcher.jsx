import AnimateElement from "./AnimateElement";

export default function TabSwitcher({ tabs, switchTab, setSwitchTab }) {
  return (
    <AnimateElement>
      <div className="flex justify-center my-20">
        {tabs.map((tab) => (
          <button
            className={`py-4 px-14 border-b font-semibold cursor-pointer uppercase tracking-widest ${
              tab === switchTab
                ? "border-peach text-dark-blue"
                : "border-transparent hover:border-gray/20 text-gray/50"
            }`}
            key={tab}
            onClick={() => setSwitchTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </AnimateElement>
  );
}
