import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function creatCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.tel}
      email={contact.email}
      address={contact.address}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Contacts</h1>
      {contacts.map(creatCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].tel}
        email={contacts[0].email}
        address={contacts[0].address}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].tel}
        email={contacts[1].email}
        address={contacts[1].address}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].tel}
        email={contacts[2].email}
        address={contacts[2].address}
      /> */}
    </div>
  );
}

export default App;
