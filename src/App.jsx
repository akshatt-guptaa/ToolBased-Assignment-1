import Header from "./Header";
// import StudentCard from "./StudentCard";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />

      <h2>About United College of Eningeering and Research</h2>
      <img src="https://www.united.ac.in/ucer/includes/UCER_CAMPUS_RAHUL.png" alt="UCR Campus" style={{ width: "100%", height: "auto", margin: "20px 0" }} /> 
<br />
      <p>Established in 1998, the United College of Engineering & Research, Prayagraj is a premier institution affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow, and duly approved by the All India Council for Technical Education (AICTE). The college is dedicated to imparting high-quality technical education and fostering research-driven learning.


Offering undergraduate and postgraduate programs, the institute provides a strong academic foundation in key engineering disciplines such as Computer Science & Engineering, Electrical Engineering, Mechanical Engineering, and more. Beyond academics, the college actively promotes research on recent technological advancements, engaging students, research scholars, academicians, and industry professionals through seminars, conferences, workshops, and short-term courses.
</p>
      <Footer />
    </div>
  );
}

export default App;