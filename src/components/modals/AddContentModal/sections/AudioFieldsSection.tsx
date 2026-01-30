import { ContentFormData, AudioFields } from '../../../../types/content';

interface AudioFieldsSectionProps {
  formData: Partial<ContentFormData>;
  onFormDataChange: (data: Partial<ContentFormData>) => void;
  errors: Record<string, string>;
}

export function AudioFieldsSection({ formData, onFormDataChange, errors }: AudioFieldsSectionProps) {
  const specific = (formData.specific as AudioFields) || {};

  const updateSpecific = (updates: Partial<AudioFields>) => {
    onFormDataChange({
      ...formData,
      specific: { ...specific, ...updates } as any,
    });
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[8px] p-[20px]">
      <h4 className="text-[16px] font-semibold text-[#111827] mb-[16px]">
        Thông tin audio
      </h4>

      <div className="space-y-[16px]">
        {/* Ngày phát hành */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Ngày phát hành <span className="text-[#b9000e]">*</span>
          </label>
          <input
            type="date"
            value={specific.releaseDate || ''}
            onChange={(e) => updateSpecific({ releaseDate: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
          />
          {errors.releaseDate && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.releaseDate}</p>
          )}
        </div>

        {/* Đơn vị phát hành/Nền tảng */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Đơn vị phát hành <span className="text-[#b9000e]">*</span>
          </label>
          <input
            type="text"
            value={specific.platform || ''}
            onChange={(e) => updateSpecific({ platform: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Spotify, Apple Podcasts, VOV..."
          />
          {errors.platform && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.platform}</p>
          )}
        </div>

        {/* Tên chương trình/Series */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Tên chương trình
          </label>
          <input
            type="text"
            value={specific.programName || ''}
            onChange={(e) => updateSpecific({ programName: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Tên chương trình"
          />
        </div>

        {/* Số tập */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Số tập
          </label>
          <input
            type="text"
            value={specific.episodeNumber || ''}
            onChange={(e) => updateSpecific({ episodeNumber: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Tập 1"
          />
        </div>

        {/* Ngôn ngữ */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Ngôn ngữ
          </label>
          <input
            type="text"
            value={specific.language || formData.common?.language || 'Tiếng Việt'}
            onChange={(e) => updateSpecific({ language: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
          />
        </div>
      </div>
    </div>
  );
}
