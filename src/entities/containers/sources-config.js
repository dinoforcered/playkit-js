// @flow
import MediaSourceList from '../lists/media-source-list'
import type {MediaSourceObject} from '../items/media-source'
import MediaSource from '../items/media-source'

export type SourcesConfigObject = {
  hls: Array<MediaSourceObject>,
  dash: Array<MediaSourceObject>,
  progressive: Array<MediaSourceObject>
};

export default class SourcesConfig {
  _hls: MediaSourceList;
  _dash: MediaSourceList;
  _progressive: MediaSourceList;

  get hls(): Array<MediaSource> {
    return this._hls.list;
  }

  set hls(value: Array<MediaSourceObject>): void {
    this._hls.list = value;
  }

  get dash(): Array<MediaSource> {
    return this._dash.list;
  }

  set dash(value: Array<MediaSourceObject>): void {
    this._dash.list = value;
  }

  get progressive(): Array<MediaSource> {
    return this._progressive.list;
  }

  set progressive(value: Array<MediaSourceObject>): void {
    this._progressive.list = value;
  }

  constructor(config?: SourcesConfigObject) {
    this._hls = new MediaSourceList();
    this._dash = new MediaSourceList();
    this._progressive = new MediaSourceList();
    if (config && config.hls) {
      this.hls = config.hls;
    }
    if (config && config.dash) {
      this.dash = config.dash;
    }
    if (config && config.progressive) {
      this.progressive = config.progressive;
    }
  }

  toJSON(): SourcesConfigObject {
    return {
      hls: this._hls.toJSON(),
      dash: this._dash.toJSON(),
      progressive: this._progressive.toJSON()
    };
  }
}
