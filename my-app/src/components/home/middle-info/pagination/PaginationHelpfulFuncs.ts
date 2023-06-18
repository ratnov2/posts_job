import { scroller } from "react-scroll";

export const PaginationFirstIndex = (
 typeSet: () => void,
 activeIndex: number,
 realIndex: number,
 disable?:boolean
) => ({
 onClick: () => {
  typeSet ();
  scroller.scrollTo("scroll-top-pagination", {
   duration: 100,
   delay: 0,
   smooth: false,
  });
 },
 disabled: disable && activeIndex === realIndex,
 active: activeIndex === realIndex
});
