window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'red';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура Вы победили', 120, 40);

};
