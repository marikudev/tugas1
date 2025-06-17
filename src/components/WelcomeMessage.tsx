interface WelcomeMessageProps {
  name: string;
}

export default function WelcomeMessage({ name }: WelcomeMessageProps) {
  return (
  <p className="text-2xl font-bold p-4 mb-8 text-gray-500">Halo, selamat datang {name}!</p>
  );
}


// export default function WelcomeMessage(props) {
//   return (
//     <p className="text-2xl font-bold p-4 mb-8 text-gray-500">
//       Halo, selamat datang **{props.name}**!
//     </p>
//   );
// }