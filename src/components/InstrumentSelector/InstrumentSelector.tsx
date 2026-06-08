
import { INSTRUMENTS } from "@/instruments/shared/instrument.constants";
import useInstrumentStore from "@/store/instrumentStore";

export const InstrumentSelector = () => {
  const currentInstrument = useInstrumentStore(
    (state) => state.currentInstrument
  );

  const setInstrument = useInstrumentStore(
    (state) => state.setInstrument
  );

  return (
    <div className="flex gap-3 flex-wrap">
      {INSTRUMENTS.map((instrument) => (
        <button
          key={instrument.id}
          disabled={!instrument.enabled}
          onClick={() => setInstrument(instrument.id)}
          className={`
            px-4 py-2 rounded-xl transition-all
            ${
              currentInstrument === instrument.id
                ? 'bg-brand-primary text-white'
                : 'bg-bg-card text-text-primary'
            }
            ${!instrument.enabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <span className="mr-2">{instrument.icon}</span>
          {instrument.name}
        </button>
      ))}
    </div>
  );
};