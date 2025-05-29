import React from 'react';
import ualLogo from '../../assets/university_of_the_arts_london_logo.jpeg';

const CertificationsSection = () => (
  <div className="px-5">
    <h2 className="text-3xl font-bold mb-4">Certifications</h2>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
        <div className="flex items-start space-x-4">
          <img
            src={ualLogo}
            alt="UAL Logo"
            className="w-20 h-20 object-contain rounded"
          />
          <div>
            <p>
              <strong>FIASHION AND SUSTAINABILITY: Understanding Luxury Fashion in a changing world:</strong><br />
              University of the Arts London (Mar 2021)
            </p>
          </div>
        </div>
    </ul>
  </div>
);

export default CertificationsSection;
