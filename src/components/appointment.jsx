import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Appointment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
      console.log(data.doctors);
    };
    fetchDoctors();
  }, []);
  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPhone(""),
        setAppointmentDate(""),
        setDepartment(""),
        setDoctorFirstName(""),
        setDoctorLastName(""),
        setHasVisited(""),
        setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                    slow-carb health goth, vape typewriter.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">
                    Coloring book nar whal glossier master cleanse umami. Salvia
                    +1 master cleanse blog taiyaki.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    Pitchfork ugh tattooed scenester echo park gastropub
                    whatever cold-pressed retro.
                  </p>
                </div>
              </div>
            </div>
            {/*----------------------------------- form---------------------------- */}
            <div className="mt-12 mx-auto px-4 p-8 bg-[#eee] lg:w-[40%] sm:w-[100%] sm:px-8 sm:rounded-xl">
              <form onSubmit={handleAppointment} className="space-y-5">
                <div>
                  <label className="font-medium">Full name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full mt-2 px-3 py-2 bg-white text-gray-500  outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full mt-2 px-3 py-2 bg-white text-gray-500  outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500  bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Phone number</label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                      <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                        <option>+91</option>
                      </select>
                    </div>
                    <input
                      type="number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="1234567899"
                      required
                      className="w-full pl-[4.5rem] pr-3 py-2 appearance-none  bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">Service</label>
                  <div className="relative flex flex-row flex-wrap gap-5 justify-start mt-2">
                    <div className=" inset-y-0  my-auto h-10 flex items-center border-r ">
                      <select
                        className="text-sm px-3 bg-white outline-none rounded-lg w-[250px] h-full "
                        value={department}
                        onChange={(e) => {
                          setDepartment(e.target.value);
                          setDoctorFirstName("");
                          setDoctorLastName("");
                        }}
                      >
                        {departmentsArray.map((depart, index) => {
                          return (
                            <option value={depart} key={index}>
                              {depart}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className=" inset-y-0  my-auto h-10 flex items-center border-r  ">
                      <select
                        value={`${doctorFirstName} ${doctorLastName}`}
                        onChange={(e) => {
                          const [firstName, lastName] =
                            e.target.value.split(" ");
                          setDoctorFirstName(firstName);
                          setDoctorLastName(lastName);
                        }}
                        disabled={!department}
                        className="text-sm px-3 bg-white outline-none rounded-lg w-[250px] h-full"
                      >
                        <option value="">Select Doctor</option>
                        {doctors
                          .filter(
                            (doctor) => doctor.doctorDepartment === department
                          )
                          .map((doctor, index) => (
                            <option
                              value={`${doctor.firstName} ${doctor.lastName}`}
                              key={index}
                            >
                              {doctor.firstName} {doctor.lastName}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  <div className="w-[250px]">
                    <label className="font-medium">Date</label>
                    <input
                      type="date"
                      placeholder="Appointment Date"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      required
                      className="w-full mt-2 px-3 py-2 bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">Address</label>
                  <textarea
                    rows="10"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none  bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  ></textarea>
                  <label
                    htmlFor="Option2"
                    className="flex cursor-pointer items-start gap-4"
                  >
                    <div className="flex items-center">
                      &#8203;
                      <input
                        type="checkbox"
                        className="size-4 rounded border-gray-300"
                        checked={hasVisited}
                        onChange={(e) => setHasVisited(e.target.checked)}
                      />
                    </div>

                    <div>
                      <strong className="font-medium text-gray-900">
                        {" "}
                        Have you visited before ?{" "}
                      </strong>
                    </div>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
