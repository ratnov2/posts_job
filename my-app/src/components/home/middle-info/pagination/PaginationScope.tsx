import { FC } from "react";
import style from "./Pagination.module.scss";
import Pagination from "react-bootstrap/Pagination";
import { animateScroll as scroll, scroller } from "react-scroll";
import { PaginationFirstIndex } from "./PaginationHelpfulFuncs";

const PaginationScope: FC<IPaginationScope> = ({
 activeIndex,
 lastIndex,
 nextPage,
 prevPage,
 setPage,
}) => {
 const rangeArrayIndex = () => {
  let begin: number, end;
  if (activeIndex - 3 <= 1) begin = 2;
  else begin = activeIndex - 3;
  if (activeIndex + 3 > lastIndex) end = lastIndex - 1;
  else end = activeIndex + 2;
  return Array.from(
   { length: end - begin + 1 },
   (e: any, i: number) => begin + i
  );
 };
 return (
  <Pagination style={{ justifyContent: "center" }}>
   <Pagination.First
    {...PaginationFirstIndex(() => setPage(1), activeIndex, 1, true)}
   />
   <Pagination.Prev
    {...PaginationFirstIndex(() => prevPage(), activeIndex, 1, true)}
   />
   <Pagination.Item {...PaginationFirstIndex(() => setPage(1), activeIndex, 1)}>
    {1}
   </Pagination.Item>
   {activeIndex > 3 && <Pagination.Ellipsis />}
   {rangeArrayIndex().map((el) => (
    <Pagination.Item
     key={el}
     {...PaginationFirstIndex(() => setPage(el), activeIndex, el)}
    >
     {el}
    </Pagination.Item>
   ))}
   {lastIndex - activeIndex > 3 && <Pagination.Ellipsis />}
   <Pagination.Item
    {...PaginationFirstIndex(() => setPage(lastIndex), activeIndex, lastIndex)}
   >
    {lastIndex}
   </Pagination.Item>
   <Pagination.Next
    {...PaginationFirstIndex(() => nextPage(), activeIndex, lastIndex, true)}
   />
   <Pagination.Last
    {...PaginationFirstIndex(
     () => setPage(lastIndex),
     activeIndex,
     lastIndex,
     true
    )}
   />
  </Pagination>
 );
};
//scroll-top-pagination
interface IPaginationScope {
 activeIndex: number;
 lastIndex: number;
 nextPage: () => void;
 prevPage: () => void;
 setPage: (page: number) => void;
}

export default PaginationScope;
