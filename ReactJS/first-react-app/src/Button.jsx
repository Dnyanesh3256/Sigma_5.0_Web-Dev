function sayHello() {
  console.log("Hello");
}

function doSomething() {
    console.log("doing something!");
}

export default function Button() {
  return (
    <>
      <button onClick={sayHello}>Click me!</button>

      <p onMouseOver={doSomething}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quia
        asperiores iste sit, quas mollitia fugit minus veniam veritatis
        blanditiis natus. Explicabo, culpa facilis? Blanditiis odit voluptate
        id, quia necessitatibus quibusdam. Dolorum accusamus vitae, perspiciatis
        dolor fugiat iure qui minus neque? Facere blanditiis consectetur
        corrupti quod! Dolore nihil provident quod.
      </p>
    </>
  );
}
