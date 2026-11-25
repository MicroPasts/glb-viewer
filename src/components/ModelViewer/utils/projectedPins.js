export function projectedPinsChanged(nextPins, previousPins) {
    return nextPins.length !== previousPins.length || nextPins.some((pin, index) => {
        const previous = previousPins[index];
        return pin.id !== previous.id ||
            Math.abs(pin.screenX - previous.screenX) > 0.5 ||
            Math.abs(pin.screenY - previous.screenY) > 0.5 ||
            pin.visible !== previous.visible ||
            pin.occluded !== previous.occluded;
    });
}
