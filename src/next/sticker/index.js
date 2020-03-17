import $ from 'cash-dom';
import { addExternalStyle } from 'common/util';
import { detectImgurAlbum } from './addHelper';
import { app } from './app';

$(() => addExternalStyle('https://unpkg.com/microtip/microtip.css'));
app();
detectImgurAlbum();
