import { useState } from "react";
import { X } from "lucide-react";

import "./CreateKpiModal.css";

export default function CreateKpiModal({ isOpen, onClose }) {
  const [weight, setWeight] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="kpi-modal">
        {/* HEADER */}
        <div className="modal-header">
          <h2>Create New KPI</h2>

          <button className="close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* BODY */}
        <div className="modal-body">
          {/* ROW */}
          <div className="form-row">
            <div className="form-group">
              <label>KPI Name</label>

              <input
                type="text"
                placeholder="e.g., Customer Satisfaction Score"
              />
            </div>

            <div className="form-group">
              <label>Category</label>

              <select>
                <option>Technical Excellence</option>

                <option>Leadership</option>

                <option>Innovation</option>
              </select>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="form-group">
            <label>Description</label>

            <textarea
              rows="4"
              placeholder="Describe what this KPI measures..."
            ></textarea>
          </div>

          {/* ROW */}
          <div className="form-row three-column">
            <div className="form-group">
              <label>Target Value</label>

              <input type="number" placeholder="100" />
            </div>

            <div className="form-group">
              <label>Weight (%)</label>

              <input
                type="number"
                placeholder="20"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Frequency</label>

              <select>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Quarterly</option>
              </select>
            </div>
          </div>

          {/* SLIDER */}
          <div className="slider-section">
            <div className="slider-header">
              <label>Weight Distribution</label>

              <span>{weight}%</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={weight}
              className="custom-slider"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="create-btn">Create KPI</button>
        </div>
      </div>
    </div>
  );
}
