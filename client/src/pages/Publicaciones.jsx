import { Skeleton, Avatar } from "antd";

const Publicaciones = () => {
  const loading = false; // Cambia esto a true para activar el Skeleton.

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-200 rounded-lg shadow-lg p-6 w-full max-w-3xl">
        {/* Header de la publicación: Foto de perfil y nombre */}
        <div className="flex items-center space-x-4 mb-4">
          {loading ? (
            <Skeleton.Avatar active size="large" shape="circle" />
          ) : (
            <Avatar size="large" src="https://via.placeholder.com/150" />
          )}
          <div>
            {loading ? (
              <Skeleton.Input active size="default" style={{ width: 150 }} />
            ) : (
              <h2 className="text-lg font-bold">John Doe</h2>
            )}
          </div>
        </div>

        <div>
          {loading ? (
            <Skeleton active paragraph={{ rows: 3 }} />
          ) : (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Vivamus nec orci nec elit suscipit vulputate ut sit amet
              libero. Etiam pulvinar odio ac turpis bibendum, in vehicula tortor
              tristique.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publicaciones;
