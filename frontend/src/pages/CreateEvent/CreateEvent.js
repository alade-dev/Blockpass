import React, { useState } from "react";

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    category: "",
    description: "",
    moreInformation: "",
    ticketPrice: "",
    availableSeats: "",
    location: "",
    startDate: "",
    endDate: "",
    timeOfEvent: "",
    banner: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, banner: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setFormData({ ...formData, banner: null });
    setImagePreview(null);
    // Also reset the file input
    document.getElementById('banner').value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data submission here via an API call
    


    console.log(formData);

    setFormData({
      eventName: "",
      category: "",
      description: "",
      moreInformation: "",
      ticketPrice: "",
      availableSeats: "",
      location: "",
      startDate: "",
      endDate: "",
      timeOfEvent: "",
      banner: null,
    });
    setImagePreview(null);

    e.target.reset();
    document.getElementById('banner').value = '';
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-8 ">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <h2 className="text-3xl font-bold text-start text-gray-800 mb-1 ">
        Create An Event
      </h2>
      <p className="mb-5 text-gray-500"> Your Best Event Place for booking and management</p>
      <form onSubmit={handleSubmit}>
        {/* Event Name */}
        <label
          htmlFor="eventName"
          className="block text-sm  font-medium text-gray-700 mb-2"
        >
          Event Name <span className="text-red-700">*</span>
        </label>
        <input
          id="eventName"
          name="eventName"
          type="text"
          required
          onChange={handleChange}
          placeholder="Input event name/title"
          className="mb-4 p-2 w-full border-2 border-gray-300  flex-auto rounded-md  bg-white/5"
        />

        {/* Category */}
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Category <span className="text-red-700">*</span>
        </label>
        <select
          id="category"
          name="category"
          required
          onChange={handleChange}
          className="mb-4 p-2 w-full border-2 border-gray-300 rounded-md bg-white/5"
        >
          <option value="">Select category</option>
          <option value="Blockchain Events">Blockchain Events</option>
          {/* Add more category options here */}
        </select>

        {/* Short Description */}
        <label
          htmlFor="shortDescription"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Short Description <span className="text-red-700">*</span>
        </label>
        <textarea
          id="shortDescription"
          name="description"
          required
          onChange={handleChange}
          placeholder="e.g. event targeted at teens in tech/health industry"
          className="mb-4 p-2 w-full border-2 border-gray-300 rounded-md bg-white/5"
          rows="3"
        ></textarea>

        {/* More Information */}
        <label
          htmlFor="moreInformation"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          More Information <span className="text-red-700">*</span>
        </label>
        <textarea
          id="moreInformation"
          name="moreInformation"
          required
          onChange={handleChange}
          placeholder="e.g. event targeted at teens in tech/health industry"
          className="mb-4 p-2 w-full border-2 border-gray-300 bg-white/5 rounded-md"
          rows="4"
        ></textarea>

        {/* Ticket Price */}
        <label
          htmlFor="ticketPrice"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Ticket Price ($)<span className="text-red-700">*</span>
        </label>
        <input
          id="ticketPrice"
          name="ticketPrice"
          type="number"
          required
          onChange={handleChange}
          placeholder="50"
          className="mb-4 p-2 w-full border-2 border-gray-300 bg-white/5 rounded-md"
        />

        {/* Available Seats */}
        <label
          htmlFor="availableSeats"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Available Seats <span className="text-red-700">*</span>
        </label>
        <input
          id="availableSeats"
          name="availableSeats"
          type="number"
          required
          onChange={handleChange}
          placeholder="500"
          className="mb-4 p-2 w-full border-2 border-gray-300 bg-white/5 rounded-md"
        />

        {/* Location */}
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Location *
        </label>
        <input
          id="location"
          name="location"
          type="text"
          required
          onChange={handleChange}
          placeholder="Lagos"
          className="mb-4 p-2 w-full border-2 border-gray-300 bg-white/5 rounded-md"
        />

        {/* Start Date */}
        <div className="flex gap-4 mb-4">
          <div>
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Start Date <span className="text-red-700">*</span>
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              required
              onChange={handleChange}
              className="p-2 border-2 border-gray-300 bg-white/5 rounded-md"
            />
          </div>

          {/* End Date */}
          <div>
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              End Date <span className="text-red-700">*</span>
            </label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              required
              onChange={handleChange}
              className="p-2 border-2 border-gray-300 bg-white/5 rounded-md"
            />
          </div>
        </div>

        {/* Time of Event */}
        <label
          htmlFor="timeOfEvent"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Time of Event <span className="text-red-700">*</span>
        </label>
        <input
          id="timeOfEvent"
          name="timeOfEvent"
          type="time"
          required
          onChange={handleChange}
          className="mb-4 p-2 w-full border-2 border-gray-300 bg-white/5 rounded-md"
        />

        {/* Upload Banner */}
        <label
          htmlFor="banner"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Upload Banner <span className="text-red-700">*</span>
        </label>
        <input
          id="banner"
          name="banner"
          type="file"
          accept="image/png, image/svg+xml, image/jpeg, image/gif"
          required
          onChange={handleFileChange}
          className="mb-4 w-full border-2 border-gray-300 bg-white/5  rounded-md file:border-none file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 p-2"
        />
        <p className="text-gray-500 mt-1">
          PNG, SVG, JPG, or GIF file, file size 800*400px
        </p>
        {imagePreview && (
          <div className="mb-4 relative">
            <img src={imagePreview} alt="Preview" className="w-1/2 h-auto rounded-md" />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-0 lg:left-[420px] left-[200px] text-red-600 "
              aria-label="Delete image"
            >
              X
            </button>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-end mt-6">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white text-2xl font-bold w-[200px] h-[50px] py-2 px-4 rounded-md transition duration-300"
          >
            Create
          </button>
        </div>
      </form>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default CreateEventForm;
