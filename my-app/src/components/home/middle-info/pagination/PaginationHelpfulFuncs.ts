export const PaginationFirstIndex = (
 typeSet: () => void,
 activeIndex: number,
 realIndex: number
) => ({
 onClick: () => typeSet,
 disabled: activeIndex === realIndex,
});
