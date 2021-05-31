import "./styles.css";
import { object, array, string } from "yup";

const mySchema = object({
  myArray: array()
    .of(
      object().shape({
        name: string().max(255).required().label("Name")
      })
    )
    .min(2, "The error message if length === 0 | 1")
});

console.log("[]", mySchema.isValidSync({ myArray: [] }));

console.log(
  '[{ name: "John" }]',
  mySchema.isValidSync({
    myArray: [{ name: "John" }]
  })
);

console.log(
  '[{ name: "John" }, { name: "Doe" }]',
  mySchema.isValidSync({
    myArray: [{ name: "John" }, { name: "Doe" }]
  })
);

console.log(
  mySchema.isValidSync({
    myArray: [{ name: "John" }]
  })
);
