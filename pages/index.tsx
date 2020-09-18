import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div className="bg-gray-100 px-8 py-12">
      <img className="h-10" src="/logo.svg" alt="Workcation" />
      <img
        className="mt-6 rounded-lg shadow-xl"
        src="/beach-work.jpg"
        alt="Woman workcationing on the beach"
      />
      <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
        You can work from anywhere.&nbsp;
        <span className="text-indigo-500">Take advantage of it.</span>
      </h1>
      <p className="mt-2 text-gray-600">yadda yadda yadda</p>
      <div className="mt-4">
        <a
          href="/"
          className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm">
          Book your escape
        </a>
      </div>
    </div>
  );
}
