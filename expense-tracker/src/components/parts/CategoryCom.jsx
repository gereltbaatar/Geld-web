import { CategoryDiv } from ".";

export const CategoryCom = ({ item, iconsArray }) => {
  return (
    <div className="py-2 flex gap-3 items-center">
      <CategoryDiv item={item} iconsArray={iconsArray} />
      <p className="font-roboto font-normal not-italic text-base">
        {item?.name}
      </p>
    </div>
  );
};
