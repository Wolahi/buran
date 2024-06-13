import SKA from "@/assets/SKA.png";
import { EMatchAction } from "@/shared/config/interfaces/EMatchAction.ts";
import { EPlayerType } from "@/shared/config/interfaces/EPlayerType.ts";
import { IMatchInfo } from "@/shared/config/interfaces/IMatchInfo.ts";

export const seasonMatchesMock: IMatchInfo[] = [
  {
    id: 1,
    title: "Вот эта победа",
    dateStart: "2024-06-13T17:32:09.120981+03:00",
    enemy: SKA,
    team: [
      {
        id: 1,
        name: "BOBI HENDRICKSON",
        number: 52,
        type: EPlayerType.GOALKEEPER,
        url: "http://109.120.187.242:9000/burah-storage/c0b7d7f0-ce07-481e-9ee0-3ee45ed0dfca?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=burah_root_minio%2F20240613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240613T193906Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d88704c79f30254fad35ccc12fad7e09edd2e4d9680b3b9360a885ef5d4cb494",
      },
      {
        id: 2,
        name: "BOBI HENDRICKSON",
        number: 52,
        type: EPlayerType.MEDIC,
        url: "http://109.120.187.242:9000/burah-storage/c0b7d7f0-ce07-481e-9ee0-3ee45ed0dfca?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=burah_root_minio%2F20240613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240613T193906Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d88704c79f30254fad35ccc12fad7e09edd2e4d9680b3b9360a885ef5d4cb494",
      },
      {
        id: 3,
        name: "BOBI HENDRICKSON",
        number: 52,
        type: EPlayerType.CAPTAIN,
        url: "http://109.120.187.242:9000/burah-storage/c0b7d7f0-ce07-481e-9ee0-3ee45ed0dfca?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=burah_root_minio%2F20240613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240613T193906Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d88704c79f30254fad35ccc12fad7e09edd2e4d9680b3b9360a885ef5d4cb494",
      },
    ],
    actions: [
      {
        playerId: 1,
        enemy: false,
        minutes: 3,
        action: EMatchAction.Entry,
      },
      {
        playerId: 1,
        enemy: false,
        minutes: 10,
        action: EMatchAction.Swap,
      },
      {
        playerId: 1,
        enemy: false,
        minutes: 15,
        action: EMatchAction.Goal,
      },
    ],
  },
  {
    id: 2,
    title: "Вот эта победа",
    dateStart: "2024-06-13T17:32:09.120981+03:00",
    enemy: SKA,
    team: [
      {
        id: 1,
        name: "BOBI HENDRICKSON",
        number: 52,
        type: EPlayerType.GOALKEEPER,
        url: "http://109.120.187.242:9000/burah-storage/c0b7d7f0-ce07-481e-9ee0-3ee45ed0dfca?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=burah_root_minio%2F20240613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240613T193906Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d88704c79f30254fad35ccc12fad7e09edd2e4d9680b3b9360a885ef5d4cb494",
      },
      {
        id: 2,
        name: "BOBI HENDRICKSON",
        number: 52,
        type: EPlayerType.MEDIC,
        url: "http://109.120.187.242:9000/burah-storage/c0b7d7f0-ce07-481e-9ee0-3ee45ed0dfca?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=burah_root_minio%2F20240613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240613T193906Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d88704c79f30254fad35ccc12fad7e09edd2e4d9680b3b9360a885ef5d4cb494",
      },
      {
        id: 3,
        name: "BOBI HENDRICKSON",
        number: 52,
        type: EPlayerType.CAPTAIN,
        url: "http://109.120.187.242:9000/burah-storage/c0b7d7f0-ce07-481e-9ee0-3ee45ed0dfca?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=burah_root_minio%2F20240613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240613T193906Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d88704c79f30254fad35ccc12fad7e09edd2e4d9680b3b9360a885ef5d4cb494",
      },
    ],
    actions: [
      {
        playerId: 1,
        enemy: false,
        minutes: 3,
        action: EMatchAction.Entry,
      },
      {
        playerId: 1,
        enemy: false,
        minutes: 10,
        action: EMatchAction.Swap,
      },
      {
        playerId: 1,
        enemy: false,
        minutes: 15,
        action: EMatchAction.Goal,
      },
    ],
  },
];
