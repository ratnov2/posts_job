export type TypePost = {
 userId: string;
 id: string;
 title: string;
 body: string;
};
export type TypeComment = {
 postId: string;
 id: string;
 name: string;
 email: string;
 body: string;
};
export type TypeUser = {
 id: string;
 name: string;
 userName: string;
 email: string;
 address: {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
   lat: string;
   lng: string;
  };
 };
 phone: string;
 website: string;
 company: {
  name: string;
  catchPhrase: string;
  bs: string;
 };
};
