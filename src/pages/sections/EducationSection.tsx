import React from 'react';
import universityLogo from '../../assets/naba_nuova_accademia_di_belle_arti_logo.jpeg';

const EducationSection = () => (
  <div className="px-5">
    <h2 className="text-3xl font-bold mb-4">Education</h2>
    <ul className="list-none space-y-4">
      <li className="border-b pb-2">
        <div className="flex items-start space-x-4">
          <img
            src={universityLogo}
            alt="NABA Logo"
            className="w-20 h-20 object-contain rounded"
          />
          <div>
            <h3 className="text-xl font-semibold">Bachelor’s Degree</h3>
            <p className="text-black">NABA Nuova Accademia di Belle Arti, Russia</p>
            <p className="text-sm text-gray-500">2016 - 2019</p>
            <p className="text-black">Grade: 110</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default EducationSection;
