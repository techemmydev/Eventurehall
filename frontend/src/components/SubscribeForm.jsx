import React, { useState, useEffect } from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { subscribeUser, resetStatus } from "../Redux/slice/subscribersSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.subscribers);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    setEmail("");
    dispatch(subscribeUser({ email }));
  };

  // ✅ Move state updates and dispatch calls inside useEffect
  useEffect(() => {
    if (success) {
      toast.success("Subscribed successfully!");
      dispatch(resetStatus());
      setEmail(""); // Clear input after success
    }

    if (error) {
      toast.error(error); // 🔴 Show error message if duplicate
      dispatch(resetStatus());
    }
  }, [success, error, dispatch]);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-semibold tracking-tight text-white font-plus-jakarta-sans">
              Stay Ahead with Our Exclusive Insights!
            </h2>
            <p className="mt-4 text-[12px] text-gray-300 font-plus-jakarta-sans">
              Subscribe to get the latest updates, expert tips, and exclusive
              offers delivered straight to your inbox. Be the first to know
              about new trends and opportunities!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Fresh Content Every Week
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400 font-plus-jakarta-sans">
                Get handpicked articles, expert insights, and industry news
                curated for you every week.
              </dd>
            </div>
            <div className="flex flex-col items-start font-plus-jakarta-sans">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                No Spam, Just Value
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                We respect your inbox! Only valuable insights and offers, no
                unnecessary emails.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
