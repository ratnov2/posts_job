import { FC } from "react";
import style from "./Pagination.module.scss";
import Pagination from "react-bootstrap/Pagination";

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
  else end = activeIndex + 3;
  return Array.from(
   { length: end - begin + 1 },
   (e: any, i: number) => begin + i
  );
 };
 return (
  <Pagination style={{ justifyContent: "center" }}>
   <Pagination.First onClick={() => setPage(1)} disabled={activeIndex === 1} />
   <Pagination.Prev onClick={() => prevPage()} disabled={activeIndex === 1} />
   <Pagination.Item onClick={() => setPage(1)} active={activeIndex === 1}>
    {1}
   </Pagination.Item>
   {activeIndex > 3 && <Pagination.Ellipsis />}
   {rangeArrayIndex().map((el) => (
    <Pagination.Item
     key={el}
     onClick={() => setPage(el)}
     active={el === activeIndex}
    >
     {el}
    </Pagination.Item>
   ))}
   {lastIndex - activeIndex > 3 && <Pagination.Ellipsis />}
   <Pagination.Item
    onClick={() => setPage(lastIndex)}
    active={activeIndex === lastIndex}
   >
    {lastIndex}
   </Pagination.Item>
   <Pagination.Next
    onClick={() => nextPage()}
    disabled={activeIndex === lastIndex}
   />
   <Pagination.Last
    onClick={() => setPage(lastIndex)}
    disabled={activeIndex === lastIndex}
   />
  </Pagination>
 );
};

interface IPaginationScope {
 activeIndex: number;
 lastIndex: number;
 nextPage: () => void;
 prevPage: () => void;
 setPage: (page: number) => void;
}

export default PaginationScope;
