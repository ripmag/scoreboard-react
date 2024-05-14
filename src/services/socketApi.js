import io from 'socket.io-client';

// export const host = 'http://localhost:3000'; //в конфиг файл
export const host = 'https://scoreboard-nestjs-i4c7cfxjuq-uc.a.run.app/'; //в конфиг файл

export default class SocketApi {
  socket = null;
  updateGameAction = null;

  constructor() {
    this.connect()
  }

  connect() {

    if (!this.socket) {
      try {
        this.socket = io.connect(host); //io.connect(host, { path: socketPath });
      }
      catch (error) {
        console.log('Connect socket error ', error)
      }
    }
  }

  onAddActionUpdateGame(action) {
    if (this.updateGameAction) {
      return;
    }

    this.on('updateGame', action);
    this.updateGameAction = action;
  }

  disconnect() {
    this.socket.disconnect();
  }

  emit(event, data) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject('No socket connection.');

      return this.socket.emit(event, data, (response) => {
        // Response is the optional callback that you can use with socket.io in every request. See 1 above.
        if (response.error) {
          console.error(response.error);
          return reject(response.error);
        }

        return resolve();
      });
    });
  }

  on(event, fun) {
    if (!this.socket) {
      console.log('socket was not open!')
      return;
    }

    this.socket.on(event, fun);
  }
}

export const socketApi = new SocketApi();