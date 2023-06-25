import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar border border-b-2 bg-base-100 p-3 shadow-md">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">idium</a>
        <span>Akkam {sessionData?.user.name}</span>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered input w-24 md:w-auto"
          />
        </div>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div
              className={`w-10 ${
                sessionData?.user.image ? "rounded-full" : ""
              }`}
            >
              {sessionData?.user.image ? (
                <img src={sessionData?.user.image} />
              ) : (
                <span onClick={() => signIn()}>Sign In</span>
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={() => signOut()}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
