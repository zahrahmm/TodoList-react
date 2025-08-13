type SidebarProps = {
  isMobile?: boolean;
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
};

const Sidebar = ({
  isMobile = false,
  onSelectCategory,
  selectedCategory,
}: SidebarProps) => {
  const categories = ["All", "Groceries", "College", "Payments"];
  return (
    <ul
      className={`${
        isMobile
          ? "block fixed left-6 top-10 min-h-20 bg-[#f8dddd] z-2 rounded-md w-40 h-52"
          : "hidden sm:block"
      } m-4`}
    >
      {categories.map((cat) => (
        <li
          key={cat}
          className={`${
            selectedCategory === cat ? "text-[#ea5959]" : "text-black"
          } font-bold text-xl p-2`}
        >
          <a href="#" onClick={() => onSelectCategory(cat)}>
            {cat}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
