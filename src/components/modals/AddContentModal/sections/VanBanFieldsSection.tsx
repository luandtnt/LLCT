import { ContentFormData, VanBanFields } from '../../../../types/content';

interface VanBanFieldsSectionProps {
  formData: Partial<ContentFormData>;
  onFormDataChange: (data: Partial<ContentFormData>) => void;
  errors: Record<string, string>;
}

export function VanBanFieldsSection({ formData, onFormDataChange, errors }: VanBanFieldsSectionProps) {
  const specific = (formData.specific as VanBanFields) || {};

  const updateSpecific = (updates: Partial<VanBanFields>) => {
    onFormDataChange({
      ...formData,
      specific: { ...specific, ...updates } as any,
    });
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[8px] p-[20px]">
      <h4 className="text-[16px] font-semibold text-[#111827] mb-[16px]">
        Thông tin văn bản
      </h4>

      <div className="space-y-[16px]">
        {/* Loại văn bản */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Loại văn bản <span className="text-[#b9000e]">*</span>
          </label>
          <select
            value={specific.documentType || ''}
            onChange={(e) => updateSpecific({ documentType: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
          >
            <option value="">Chọn loại văn bản</option>
            <option value="Nghị quyết">Nghị quyết</option>
            <option value="Chỉ thị">Chỉ thị</option>
            <option value="Kết luận">Kết luận</option>
            <option value="Hướng dẫn">Hướng dẫn</option>
            <option value="Báo cáo">Báo cáo</option>
            <option value="Bài viết">Bài viết</option>
            <option value="Khác">Khác</option>
          </select>
          {errors.documentType && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.documentType}</p>
          )}
        </div>

        {/* Ngày ban hành */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Ngày ban hành <span className="text-[#b9000e]">*</span>
          </label>
          <input
            type="date"
            value={specific.issueDate || ''}
            onChange={(e) => updateSpecific({ issueDate: e.target.value, issueYear: e.target.value.split('-')[0] })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
          />
          {errors.issueDate && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.issueDate}</p>
          )}
        </div>

        {/* Số hiệu/Ký hiệu */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Số hiệu/Ký hiệu
          </label>
          <input
            type="text"
            value={specific.documentNumber || ''}
            onChange={(e) => updateSpecific({ documentNumber: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Số 01/NQ-TW"
          />
        </div>

        {/* Cơ quan ban hành */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Cơ quan ban hành
          </label>
          <input
            type="text"
            value={specific.issuer || formData.common?.organization || ''}
            onChange={(e) => updateSpecific({ issuer: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Ban Chấp hành Trung ương"
          />
        </div>

        {/* Nơi ban hành */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Nơi ban hành
          </label>
          <input
            type="text"
            value={specific.issueLocation || ''}
            onChange={(e) => updateSpecific({ issueLocation: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Hà Nội"
          />
        </div>

        {/* Tình trạng hiệu lực */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Tình trạng hiệu lực
          </label>
          <select
            value={specific.effectiveStatus || 'CON_HIEU_LUC'}
            onChange={(e) => updateSpecific({ effectiveStatus: e.target.value as any })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
          >
            <option value="CON_HIEU_LUC">Còn hiệu lực</option>
            <option value="DA_THAY_THE">Đã thay thế</option>
            <option value="BAI_BO">Bãi bỏ</option>
          </select>
        </div>

        {/* Văn bản liên quan */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Văn bản liên quan
          </label>
          <textarea
            value={specific.relatedDocuments || ''}
            onChange={(e) => updateSpecific({ relatedDocuments: e.target.value })}
            rows={2}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Mã hoặc tên các văn bản liên quan"
          />
        </div>
      </div>
    </div>
  );
}
