import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsApiResponse = {
  id: string;
  name: string;
}[];

export const CreateRoom = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const respose = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsApiResponse = await respose.json();
      return result;
    },
  });

  return (
    <>
      {isLoading && <div>Loading...</div>}

      <div className="flex flex-col gap-1">
        {data?.map((room) => (
          <Link to={`/room/${room.id}`} key={room.id}>
            {room.name}
          </Link>
        ))}
      </div>
    </>
  );
};
