import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Map from "../components/Map";
import { X } from "lucide-react";

const calendarStyles = `
  .react-calendar {
    width: 100%;
    max-width: 500px;
    font-family: Arial, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar button {
    border-radius: 0.5rem;
    margin: 2px;
  }
  .react-calendar__tile--active,
  .react-calendar__tile--hasActive,
  .react-calendar__tile--now {
    border-radius: 0.5rem !important;
  }
  .bg-green-500,
  .bg-orange-500,
  .bg-red-500 {
    border-radius: 0.5rem !important;
    margin: 2px !important;
  }
`;

export default function Component() {
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [selectedStatus, setSelectedStatus] = useState("enCurso");
  const [address, setAddress] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoPreview, setVideoPreview] = useState("");
  const [selectedEventTypes, setSelectedEventTypes] = useState([]);

  const startDate = dates[0];
  const endDate = dates[1];

  const statusOptions = [
    { id: "enCurso", label: "Evento en curso", color: "bg-green-500" },
    {
      id: "porFinalizar",
      label: "Evento por finalizar",
      color: "bg-orange-500",
    },
    { id: "finalizado", label: "Evento finalizado", color: "bg-red-500" },
  ];

  const eventTypes = [
    "Evento Culturales",
    "Evento Sociales",
    "Evento Musicales",
    "Evento Caritativo",
  ];

  const handleDateChange = (date) => {
    setDates(date);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles((prevFiles) => [...prevFiles, ...files]);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = (index) => {
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  const handleRemoveVideo = () => {
    setVideoFile(null);
    setVideoPreview("");
  };

  const handleEventTypeSelect = (eventType) => {
    if (!selectedEventTypes.includes(eventType)) {
      setSelectedEventTypes([...selectedEventTypes, eventType]);
    }
  };

  const handleRemoveEventType = (eventType) => {
    setSelectedEventTypes(
      selectedEventTypes.filter((type) => type !== eventType)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Evento publicado:", {
      title: e.target.titulo.value,
      description: e.target.descripcion.value,
      startDate,
      endDate,
      status: selectedStatus,
      address,
      images: imageFiles,
      video: videoFile,
      eventTypes: selectedEventTypes,
    });
  };

  return (
    <>
      <style>{calendarStyles}</style>
      <div className="flex flex-col w-full justify-center items-center p-4 bg-gray-100">
        <main className="w-full max-w-6xl bg-white border border-gray-300 rounded-lg shadow-lg p-6 mb-4">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Publicar Evento
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Primera fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="titulo"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Título del Evento
                  </label>
                  <input
                    type="text"
                    id="titulo"
                    className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="descripcion"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Descripción del Evento
                  </label>
                  <textarea
                    id="descripcion"
                    className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="direccion"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Dirección seleccionada en el mapa
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    className="border border-gray-300 rounded-lg w-full p-2 bg-gray-100"
                    value={address}
                    readOnly
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="imagenes"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Imágenes del Evento
                  </label>
                  <input
                    type="file"
                    id="imagenes"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {imagePreviews.length > 0 && (
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative w-full pt-[100%]">
                          <img
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-75 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="video"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Video del Evento
                  </label>
                  <input
                    type="file"
                    id="video"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {videoPreview && (
                    <div className="mt-2 relative">
                      <video
                        src={videoPreview}
                        controls
                        className="w-full rounded-lg"
                        style={{ maxHeight: "200px" }}
                      >
                        Tu navegador no soporta el elemento de video.
                      </video>
                      <button
                        type="button"
                        onClick={handleRemoveVideo}
                        className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-75 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Tipo de Evento
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {eventTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleEventTypeSelect(type)}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedEventTypes.map((type) => (
                      <div
                        key={type}
                        className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-md"
                      >
                        {type}
                        <button
                          type="button"
                          onClick={() => handleRemoveEventType(type)}
                          className="ml-1 text-xs"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="calendar"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Seleccionar Fechas del Evento
                  </label>
                  <Calendar
                    selectRange
                    onChange={handleDateChange}
                    value={dates}
                    tileClassName={({ date, view }) => {
                      if (view === "month") {
                        if (
                          date >= new Date(startDate) &&
                          date <= new Date(endDate)
                        ) {
                          switch (selectedStatus) {
                            case "enCurso":
                              return "bg-green-500 text-white";
                            case "porFinalizar":
                              return "bg-orange-500 text-white";
                            case "finalizado":
                              return "bg-red-500 text-white";
                            default:
                              return null;
                          }
                        }
                      }
                      return null;
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="estado"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Estado del Evento
                  </label>
                  <div className="flex gap-4">
                    {statusOptions.map((status) => (
                      <div key={status.id} className="flex items-center">
                        <input
                          type="radio"
                          id={status.id}
                          name="status"
                          value={status.id}
                          checked={selectedStatus === status.id}
                          onChange={() => setSelectedStatus(status.id)}
                          className="mr-2"
                        />
                        <label
                          htmlFor={status.id}
                          className={`cursor-pointer ${status.color} p-2 rounded-md text-white`}
                        >
                          {status.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Map setAddress={setAddress} />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Publicar Evento
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
