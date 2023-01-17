import React from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Props = {
  data: Post[];
  users: RootObject[]
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface RootObject {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

function news({ data, users }: Props) {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
      {data.map((item: Post) => (
        <div key={item.title}>{item.title}</div>
      ))}
      </div>
      <div>
        {users.map((obj)=>(
          <div key={obj.name}>{obj.name} {obj.company.name}</div>
        ))}
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res)=>res.json()
  )

  return {
    props: {
      data:data,
      users:users,
    },
  };
}
export default news;
