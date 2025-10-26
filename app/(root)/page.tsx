import Hello from "@/components/Hello";


function page() {
  console.log("what type of comp am i?");
  return (
    <main>
      <div className="text-5xl underline">Welcome to Next.js!</div>
      <Hello />
    </main>
  );
}

export default page;
